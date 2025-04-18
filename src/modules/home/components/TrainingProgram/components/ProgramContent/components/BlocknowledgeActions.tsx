import { Button } from '@/components/ui/button';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Ellipsis, Pencil, Plus, Trash2 } from 'lucide-react';
import DialogAddKnowLedge from './AddBlocKnowledge/DialogAddKnowLedge';
import { useState } from 'react';

export default function BlocknowledgeActions() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='cursor-pointer' variant='ghost'>
                        <Ellipsis />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Plus className="mr-2" /> Thêm
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Pencil className="mr-2 text-blue-600 hover:text-blue-800" /> Chỉnh sửa
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Trash2 className="mr-2 text-red-600 hover:text-red-800" /> Xoá
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Dialog component được render dưới cùng */}
            <DialogAddKnowLedge open={open} onOpenChange={setOpen} />
        </>
    );
}
