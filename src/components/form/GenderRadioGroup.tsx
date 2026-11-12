
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface GenderRadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
}

const GenderRadioGroup: React.FC<GenderRadioGroupProps> = ({ value, onValueChange }) => {
  return (
    <FormItem className="animate-fade-in">
      <FormLabel>Gender</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={onValueChange}
          value={value}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <RadioGroupItem value="male" id="male" />
            <label htmlFor="male" className="cursor-pointer">Male</label>
          </div>
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <RadioGroupItem value="female" id="female" />
            <label htmlFor="female" className="cursor-pointer">Female</label>
          </div>
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <RadioGroupItem value="other" id="other" />
            <label htmlFor="other" className="cursor-pointer">Other</label>
          </div>
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
            <label htmlFor="prefer-not-to-say" className="cursor-pointer">Prefer not to say</label>
          </div>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default GenderRadioGroup;
