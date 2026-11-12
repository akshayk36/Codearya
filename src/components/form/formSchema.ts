
import * as z from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits').max(15, 'Mobile number must be at most 15 digits'),
  stream: z.string().min(1, 'Please select your academic stream'),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say'], {
    required_error: 'Please select your gender',
  }),
  internshipArea: z.string().min(1, 'Please select an internship area'),
  portfolio: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type FormData = z.infer<typeof formSchema>;
