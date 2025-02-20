import { Button } from "@repo/design/components/ui/button";
import { Dialog } from "@repo/design/dialog";

export default function Home() {
  return (
    <div className="bg-purple-500">
      <h1>Hello World My Next App</h1>
      <Button.Button>My Button</Button.Button>
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.Close>Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
