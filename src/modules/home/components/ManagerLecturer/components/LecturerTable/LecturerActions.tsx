import { Button } from '@/components/ui/button';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Ellipsis } from 'lucide-react';

export default function LecturerActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=' cursor-pointer' variant='ghost'>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Chỉnh sữa</DropdownMenuItem>
        <DropdownMenuItem>Export</DropdownMenuItem>
        <DropdownMenuItem variant='destructive'>Xoá</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
