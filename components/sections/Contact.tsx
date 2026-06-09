'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Phone, CheckCircle2, AlertCircle } from 'lucide-react';

function formatPhoneNumber(value: string): string {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '').slice(0, 10);
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Please tell me your name.' }),
  phone: z.string().refine((val) => {
    const cleanNum = val.replace(/\D/g, '');
    return cleanNum.length === 10;
  }, { message: 'Please enter a valid 10-digit phone number.' }),
  serviceNeed: z.enum(['Mechanical & Engine Care', 'Electrical & Electronics', 'Detailing & Protection']),
  boatModel: z.string().min(2, { message: 'Engine make & boat model helps me prepare.' }),
  message: z.string().min(5, { message: 'Please provide a brief description of the issue.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = isMounted ? shouldReduceMotionRaw : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      serviceNeed: 'Mechanical & Engine Care',
      boatModel: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('serviceNeed', data.serviceNeed);
      formData.append('boatModel', data.boatModel);
      formData.append('message', data.message);

      try {
        const response = await fetch('/_forms.html', {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: formData,
        });

        if (response.ok) {
          setSubmitResult({ 
            success: true, 
            message: `Thanks ${data.name}! I've received your request. I will review your ${data.boatModel} specs and call or text you at ${data.phone} soon so we can inspect your boat.` 
          });
          reset();
        } else {
          setSubmitResult({ success: false, message: 'Could not send request. Please check your connection or call me instead.' });
        }
      } catch (err) {
        setSubmitResult({ success: false, message: 'Could not connect. Please check your network or call me instead.' });
      }
    });
  };

  return (
    <section id="contact" className="bg-surface-offwhite py-24 scroll-mt-20 border-t border-surface-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Friendly Text & Direct Dial Call */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full lg:sticky lg:top-28 text-center lg:text-left items-center lg:items-start">
            <span className="font-heading text-sm font-semibold text-sun-orange uppercase tracking-wider block mb-2">
              Let&apos;s get it fixed
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-marine-navy sm:text-4xl mb-6">
              Skip the long shipyard wait. Reach out directly.
            </h2>
            <p className="text-base text-text-muted leading-relaxed mb-8 max-w-md lg:max-w-none font-sans">
              Ready to get back on the water? Tell me about your boat&apos;s symptoms, and I will get back to you immediately with an on-site diagnostic schedule.
            </p>

            <div className="space-y-4 flex flex-col items-center lg:items-start w-full">
              <a
                href="tel:+15615605050"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-marine-navy text-white px-8 py-4 text-base font-semibold shadow-md hover:bg-marine-navy-light transition-all duration-200"
              >
                <Phone className="h-5 w-5 text-sun-orange animate-bounce" />
                Call Jack (561) 560-5050
              </a>
              <p className="text-xs text-text-muted font-sans">
                Usually on a dock working—call or text for fastest response.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white shadow-md rounded-2xl p-8 border border-surface-blue">
              <AnimatePresence mode="wait">
                {submitResult?.success ? (
                  <motion.div
                    key="success-card"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-offwhite text-sun-orange mb-6 border border-surface-blue">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-marine-navy mb-3">
                      Talk To You Soon!
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-md mx-auto">
                      {submitResult.message}
                    </p>
                    <button
                      onClick={() => setSubmitResult(null)}
                      className="rounded-full border border-marine-navy px-6 py-2.5 text-xs font-semibold text-marine-navy hover:bg-surface-blue transition-all"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-card"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <h3 className="font-heading text-xl font-bold text-marine-navy border-b border-surface-blue pb-4">
                      Request a Dockside Visit
                    </h3>

                    {submitResult && !submitResult.success && (
                      <div className="flex items-center gap-2 p-4 rounded-xl bg-sun-orange/10 border border-sun-orange/20 text-sun-orange text-sm">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <span>{submitResult.message}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-marine-navy uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          placeholder="Your full name"
                          className="w-full min-h-[48px] bg-surface-offwhite border border-surface-blue focus:border-sun-orange focus:ring-1 focus:ring-sun-orange focus:outline-none rounded-xl px-4 py-3 text-base md:text-sm text-text-main placeholder:text-base md:placeholder:text-sm placeholder:text-text-muted/50 transition-all font-sans"
                        />
                        {errors.name && (
                          <p className="text-xs font-semibold text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-marine-navy uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone', {
                            onChange: (e) => {
                              e.target.value = formatPhoneNumber(e.target.value);
                            }
                          })}
                          placeholder="(561)555-0199"
                          className="w-full min-h-[48px] bg-surface-offwhite border border-surface-blue focus:border-sun-orange focus:ring-1 focus:ring-sun-orange focus:outline-none rounded-xl px-4 py-3 text-base md:text-sm text-text-main placeholder:text-base md:placeholder:text-sm placeholder:text-text-muted/50 transition-all font-sans"
                        />
                        {errors.phone && (
                          <p className="text-xs font-semibold text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Primary Service Need Selector Dropdown */}
                    <div>
                      <label htmlFor="serviceNeed" className="block text-xs font-bold text-marine-navy uppercase tracking-wider mb-2">
                        Primary Service Need
                      </label>
                      <div className="relative">
                        <select
                          id="serviceNeed"
                          {...register('serviceNeed')}
                          className="w-full min-h-[48px] bg-surface-offwhite border border-surface-blue focus:border-sun-orange focus:ring-1 focus:ring-sun-orange focus:outline-none rounded-xl px-4 pr-10 py-3 text-base md:text-sm text-text-main appearance-none font-sans cursor-pointer transition-all"
                        >
                          <option value="Mechanical & Engine Care">Mechanical & Engine Care</option>
                          <option value="Electrical & Electronics">Electrical & Electronics</option>
                          <option value="Detailing & Protection">Detailing & Protection</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
                          <svg className="fill-current h-4 w-4 text-marine-navy" xmlns="http://www.w3.org/2500/svg" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                      {errors.serviceNeed && (
                        <p className="text-xs font-semibold text-red-500 mt-1">{errors.serviceNeed.message}</p>
                      )}
                    </div>

                    {/* Boat Make/Model */}
                    <div>
                      <label htmlFor="boatModel" className="block text-xs font-bold text-marine-navy uppercase tracking-wider mb-2">
                        Boat Make / Model & Engine Specs
                      </label>
                      <input
                        type="text"
                        id="boatModel"
                        {...register('boatModel')}
                        placeholder="e.g., Boston Whaler Realm 350 / Mercury Verado 300"
                        className="w-full min-h-[48px] bg-surface-offwhite border border-surface-blue focus:border-sun-orange focus:ring-1 focus:ring-sun-orange focus:outline-none rounded-xl px-4 py-3 text-base md:text-sm text-text-main placeholder:text-base md:placeholder:text-sm placeholder:text-text-muted/50 transition-all font-sans"
                      />
                      {errors.boatModel && (
                        <p className="text-xs font-semibold text-red-500 mt-1">{errors.boatModel.message}</p>
                      )}
                    </div>

                    {/* Message / What's going on */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-marine-navy uppercase tracking-wider mb-2">
                        What&apos;s Going On?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        placeholder="Please describe what is happening with your boat, or specify a desired maintenance package."
                        className="w-full min-h-[120px] bg-surface-offwhite border border-surface-blue focus:border-sun-orange focus:ring-1 focus:ring-sun-orange focus:outline-none rounded-xl px-4 py-3 text-base md:text-sm text-text-main placeholder:text-base md:placeholder:text-sm placeholder:text-text-muted/50 transition-all font-sans resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs font-semibold text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full rounded-full bg-sun-orange py-4 px-6 text-sm font-semibold text-white shadow-sm hover:bg-sun-orange-light transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isPending ? (
                        <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      ) : (
                        <span>Send Dockside Request</span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
