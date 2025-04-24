/**
 * Represents a contact form submission.
 */
export interface ContactFormSubmission {
  /**
   * The name of the person submitting the form.
   */
  name: string;
  /**
   * The email address of the person submitting the form.
   */
  email: string;
  /**
   * The message content.
   */
  message: string;
}

/**
 * Asynchronously submits a contact form.
 *
 * @param submission The contact form submission data.
 * @returns A promise that resolves to true if the submission was successful, false otherwise.
 */
export async function submitContactForm(submission: ContactFormSubmission): Promise<boolean> {
  // TODO: Implement this by calling an API.
  console.log('submitContactForm called', submission);

  return true;
}
