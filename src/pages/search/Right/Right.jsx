import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Right.module.css";

function RightCol(props) {
  const { history } = props;

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.tagLine}>Search History</p>

        {history.length > 0 ? (
          history.map((item) => (
            <>
              <Button
                variant="outline-secondary"
                key={item}
                disabled
                className={styles.btn}
              >
                {item}
              </Button>{" "}
            </>
          ))
        ) : (
          <p className={styles.regret}>No history found!</p>
        )}
      </div>
    </div>
  );
}

export default RightCol;
