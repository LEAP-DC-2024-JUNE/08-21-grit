import Card from "./Card";
import Img1 from "../../public/img1.png";
import Img2 from "../../public/img2.png";

const Glasses = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div>
          <Card imgSrc={Img1} title="Burnikk" description="Black" />
        </div>
        <div>
          <Card imgSrc={Img2} title="Kibal Batal" description="Kibal Black" />
        </div>
        <div>
          <Card imgSrc={Img1} title="Very Nice" description="Salt maalat" />
        </div>
      </div>
    </div>
  );
};

// Exercise 1: Basic Prop-Based Conditional Rendering

// Task: Create a component that receives a prop isLoggedIn and displays “Logged In” if true, or “Please Log In” if false.

//   •  Instructions:
//   •  Create a LoginStatus component that accepts a prop isLoggedIn.
//   •  Use conditional rendering based on the isLoggedIn prop to display the appropriate message.

// Exercise 2: Conditional Rendering Based on User Role

// Task: Create a component that renders different messages based on the role prop. Display “Admin Dashboard” for an admin, “User Dashboard” for a user, and “Access Denied” for others.

//   •  Instructions:
//   •  The component accepts a prop role.
//   •  Use if-else or ternary operators to render different content based on the role.

// Exercise 3: Conditional Rendering with Multiple Props

// Task: Create a component that renders “VIP Access” if both isLoggedIn and isVIP props are true. Otherwise, render a message based on which prop is false.

//   •  Instructions:
//   •  Accept two props: isLoggedIn and isVIP.
//   •  Conditionally render the appropriate message.

// Exercise 4: Conditional Rendering with a List of Items

// Task: Create a component that accepts an array of items as a prop. If the array is empty, render “No items available.” Otherwise, render the list of items.

//   •  Instructions:
//   •  Accept an array prop items.
//   •  Conditionally render the list or a “No items” message based on whether the array is empty.

export default ConRendering;
