 
// feedback.js

function validateFeedbackForm(requestId, reason, comments) {
  if (!requestId || !reason) {
    return { success: false, error: "Request ID and reason are required." };
  }

  if (comments && comments.trim().length < 2) {
    return { success: false, error: "Comment must be at least 2 characters." };
  }

  const feedback = {
    requestId,
    reason,
    comments: comments && comments.trim() ? comments.trim() : "",


    submittedAt: new Date().toISOString()
  };

  return { success: true, feedback };
}

module.exports = { validateFeedbackForm };

// ------------------------------------------------------------
// Test Cases for validateFeedbackForm()
// ------------------------------------------------------------
// TC01: Valid requestId, reason, and comments → success = true
// TC02: Missing requestId → error: "Request ID and reason are required."
// TC03: Missing reason → error: "Request ID and reason are required."
// TC04: Comment less than 2 characters → error
// TC05: No comment provided → success = true with empty comment string
