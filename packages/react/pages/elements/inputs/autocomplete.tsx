import { AutocompleteInput, Section } from "../../../src";

export default function AutocompleteInputPage() {
  return (
    <div className="p-2">
      <div className="text-3xl my-8">Autocomplete Input</div>
      Default
      <Section className="mb-8 flex items-center justify-center border">
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
        />
      </Section>
      Disable
      <Section className="flex items-center justify-center border">
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
