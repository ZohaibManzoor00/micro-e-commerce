interface NavbarItem {
  href: string;
  children: React.ReactNode;
}
interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function NavbarSidebar({ items, open, onOpenChange }: Props) {
  return <></>
  // return (
  //   <Sheet open={open} onOpenChange={onOpenChange}>
  //     <SheetContent side="left" className="p-0 transition-none">
  //       <SheetHeader className="p-4 border-b">
  //         <div className="flex items-center">
  //           <SheetTitle>Menu</SheetTitle>
  //         </div>
  //       </SheetHeader>
  //       <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
  //         {items.map((item) => (
  //           <Link
  //             key={item.href}
  //             href={item.href}
  //             onClick={() => onOpenChange(false)}
  //             className="w-full text-left p-4 hover:bg-primary hover:text-secondary flex items-center text-base font-medium "
  //           >
  //             {item.children}
  //           </Link>
  //         ))}
  //         <div className="border-t">
  //           <Link
  //             onClick={() => onOpenChange(false)}
  //             href="/sign-in"
  //             className="w-full text-left p-4 hover:bg-primary hover:text-secondary flex items-center text-base font-medium "
  //           >
  //             Login
  //           </Link>
  //           <Link
  //             onClick={() => onOpenChange(false)}
  //             href="/sign-up"
  //             className="w-full text-left p-4 hover:bg-primary hover:text-secondary flex items-center text-base font-medium "
  //           >
  //             Start selling
  //           </Link>
  //         </div>
  //       </ScrollArea>
  //     </SheetContent>
  //   </Sheet>
  // );
}
