/* import "@blueprintjs/core/lib/css/blueprint.css";
import { Overlay, Classes, H3, Button } from "@blueprintjs/core";
import React from "react";

const Search = () => {
  // Open state
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      style={{
        display: "block",
        width: 400,
        padding: 30,
      }}
    >
      <h4>ReactJS Blueprint Overlay Component</h4>

      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Toggle Overlay
      </Button>

      <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={isOpen}>
        <H3>I am sample Content of Overlay</H3>
        <Button
        onClick={() => {
          setIsOpen(false   );
        }}
      >
        Toggle Overlay
      </Button>
      </Overlay>
    </div>
  );
};

export default Search;
 */