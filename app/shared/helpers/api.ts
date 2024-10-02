import { emailSchema, TO_GMAIL, TO_NAME } from "@/shared/helpers/constant";
import { notifications } from "@mantine/notifications";
import { MantineColor } from "@mantine/core";

export const sendEmail = (payload: any, callback: (type?: string) => void) => {
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...emailSchema,
      template_id: Object.hasOwn("template_id" as never, payload)
        ? payload.template_id
        : emailSchema.template_id,
      template_params: {
        ...payload,
        to_gmail: TO_GMAIL,
        to_name: TO_NAME,
      },
    }),
  })
    .then(() => {
      callback("success");
      notify("success");
    })
    .catch((error) => {
      callback();
      notify("failed", error.message);
    });
};

const notify = (type: string, message?: string) => {
  return notifications.show({
    title: `Your request has been ${type}!`,
    message: message
      ? message
      : type === "success"
      ? "We will contact you soon!"
      : "Something went wrong please try again! after some time.",
    color: (type === "success" ? "green" : "red") as MantineColor,
    position: "top-center",
  });
};
