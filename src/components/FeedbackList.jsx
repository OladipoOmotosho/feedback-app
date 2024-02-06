import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {!feedback || feedback.length === 0 ? (
          <p>No feedback yet</p>
        ) : (
          feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
