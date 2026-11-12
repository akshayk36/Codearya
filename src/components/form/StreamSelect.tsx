
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { streams } from '@/constants/streams';

interface StreamSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

const StreamSelect: React.FC<StreamSelectProps> = ({ value, onValueChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStreams = streams.filter(stream =>
    stream.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FormItem className="animate-fade-in">
      <FormLabel>Academic Stream</FormLabel>
      <Select onValueChange={onValueChange} value={value}>
        <FormControl>
          <SelectTrigger className="bg-background/50 border-white/20 focus:border-neon-blue transition-all duration-300 hover:border-neon-blue/50">
            <SelectValue placeholder="Search and select your academic stream" />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="bg-background/95 backdrop-blur-xl border-white/20 max-h-60 z-50">
          <div className="sticky top-0 bg-background/95 p-2 border-b border-white/10 z-10">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search streams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 bg-background/50 border-white/20 h-8"
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredStreams.map((stream) => (
              <SelectItem
                key={stream}
                value={stream}
                className="hover:bg-neon-blue/20 cursor-pointer transition-colors duration-200 px-3 py-2"
              >
                {stream}
              </SelectItem>
            ))}
            {filteredStreams.length === 0 && (
              <div className="p-4 text-center text-muted-foreground">
                No streams found matching "{searchTerm}"
              </div>
            )}
          </div>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};

export default StreamSelect;
