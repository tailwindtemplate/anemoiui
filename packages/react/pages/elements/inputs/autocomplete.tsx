import { AutocompleteInput, Heading2, Heading3, Section } from '../../../src';

export default function AutocompleteInputPage() {
  return (
      <div className="space-y-4">
          <Heading2>Autocomplete Input</Heading2>
          <Heading3>Default</Heading3>
          <Section className="mb-8 flex items-center justify-center border bg-white">
              <AutocompleteInput
                  suggestions={[
                      "Nguyễn Văn Anh Anh Anh Anh Anh Anh Anh Anh Anh Anh Anh",
                      "Lê Thị Kim Cương",
                      "Trần Mai Ngọc Ngà",
                      "Huỳnh Văn Anh Đức",
                      "Châu Ánh Nguyệt",
                      "Võ Nguyễn Mai Thy",
                      "Thái Văn Phong",
                      "Nguyễn Ngọc Minh Thư",
                      "Lê Mai Thanh Tâm",
                      "Trần Trung Kiên"
                  ]}
              />
          </Section>
          <Heading3>Disable</Heading3>
          <Section className="flex items-center justify-center border bg-white">
              <AutocompleteInput
                  suggestions={[
                      "Nguyễn Văn Anh",
                      "Lê Thị Kim Cương",
                      "Trần Mai Ngọc Ngà",
                      "Huỳnh Văn Anh Đức",
                      "Châu Ánh Nguyệt",
                      "Võ Nguyễn Mai Thy",
                      "Thái Văn Phong",
                      "Nguyễn Ngọc Minh Thư",
                      "Lê Mai Thanh Tâm",
                      "Trần Trung Kiên"
                  ]}
                  disabled
              />
          </Section>
      </div>
  );
}
