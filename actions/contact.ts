'use server';

export async function submitContactForm(prevState: any, formData: FormData) {
  // Simulate delay for realism
  await new Promise((resolve) => setTimeout(resolve, 800));

  const name = formData.get('name');
  const phone = formData.get('phone');
  const boatModel = formData.get('boatModel');
  const message = formData.get('message');

  if (!name || !phone || !message) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  // Under normal server conditions, email sending or CRM logging happens here.
  return {
    success: true,
    message: `Thank you, ${name}! We have received your details and will call or text you shortly.`,
  };
}
