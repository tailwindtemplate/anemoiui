import {AutocompleteInput, Section} from '../../../src';

export default function AutocompleteInputPage() {
    return (
        <div className='p-2'>
            <div className='text-3xl'>Autocomplete Input</div>
        <Section narrow>
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
        </div>
    );
}
