import PropTypes from "prop-types";
import { NotificMessage } from "./NotificMessage.styled";

export default function Notification({ message }) {
  return <NotificMessage>{message}</NotificMessage>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
