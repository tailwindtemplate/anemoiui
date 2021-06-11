import { Button, Section } from "../../src";

export default function PreviewButton() {
  return (
    <div className="p-2">
      <div className="text-3xl my-8">Buttons</div>
      Size XS -{">"} XL
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Button type="primary" size="xs" />
        <Button type="primary" size="sm" />
        <Button type="primary" />
        <Button type="primary" size="lg" />
        <Button type="primary" size="xl" />
      </Section>

      Type: secondary
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Button type="secondary" />
      </Section>

      Type: gradient
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Button type="gradient" />
      </Section>

      Custom classname
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Button size="xs" className="bg-neutral-50" />
        <Button size="xs" className="bg-neutral-100" />
        <Button size="xs" className="bg-neutral-200" />
        <Button size="xs" className="bg-neutral-300" />
        <Button size="xs" className="bg-neutral-400" />
      </Section>

      Disable
      <Section className="flex items-center justify-center border bg-white">
        <Button size="xl" type="primary" disabled />
      </Section>
    </div>
  );
}
