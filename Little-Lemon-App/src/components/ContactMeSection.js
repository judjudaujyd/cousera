import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useAlertContext } from "../context/alertContext";
import { useSubmit } from "../hooks/useSubmit";

export default function ContactMeSection() {
  const { onOpen } = useAlertContext();
  const { response, submit, isLoading } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Enquiry type is required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Comment is required"),
    }),
    onSubmit: (values, actions) => {
      submit("contact", values);
    },
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <Box id="contactme-section" p={10} bg="gray.100">
      <Heading mb={6}>Contact Me</Heading>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl
            isInvalid={formik.touched.firstName && formik.errors.firstName}
          >
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input id="firstName" {...formik.getFieldProps("firstName")} />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.email && formik.errors.email}
          >
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input id="email" type="email" {...formik.getFieldProps("email")} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.type && formik.errors.type}>
            <FormLabel htmlFor="type">Type of enquiry</FormLabel>
            <Select id="type" {...formik.getFieldProps("type")}>
              <option value="" label="Select option" />
              <option value="hireMe" label="Hire Me" />
              <option value="openSource" label="Open Source" />
              <option value="other" label="Other" />
            </Select>
            <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.comment && formik.errors.comment}
          >
            <FormLabel htmlFor="comment">Your message</FormLabel>
            <Textarea id="comment" {...formik.getFieldProps("comment")} />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" isLoading={isLoading}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
