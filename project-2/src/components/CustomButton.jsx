import { MessageSquareText, Phone } from "lucide-react";
import { Button } from "react-bootstrap"; 

const CustomButton = (props) => {
  return (
    <Button>
      {props.icon}
      {props.text}
    </Button>
  );
};

export default CustomButton;
