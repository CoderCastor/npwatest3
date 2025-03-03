import FeedbackForm from "./FeedbackForm";

export default function FeedbackButton() {
  return (
    <>
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700">
        Give Feedback
      </button>

      <FeedbackForm />
    </>
  );
}
