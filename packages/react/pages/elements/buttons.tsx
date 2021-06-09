import { Button } from '../../src';

export default function PreviewButton() {
    return (
        <div>
            <div>
                <Button type="primary" size="xs" />
                <Button type="primary" size="sm" />
                <Button type="primary" />
                <Button type="primary" size="lg" />
                <Button type="primary" size="xl" />
            </div>
            <div>
                <Button type="secondary" size="xs" />
                <Button type="secondary" size="sm" />
                <Button type="secondary" />
                <Button type="secondary" size="lg" />
                <Button type="secondary" size="xl" />
            </div>
            <div>
                <Button type="gradient" size="xs" />
                <Button type="gradient" size="sm" />
                <Button type="gradient" />
                <Button type="gradient" size="lg" />
                <Button type="gradient" size="xl" />
            </div>
            <div>
                <Button size="xs" className="bg-neutral-50" />
                <Button size="xs" className="bg-neutral-100" />
                <Button size="xs" className="bg-neutral-200" />
                <Button size="xs" className="bg-neutral-300" />
                <Button size="xs" className="bg-neutral-400" />
                <Button size="xs" className="bg-neutral-500" />
                <Button size="xs" className="bg-neutral-600" />
                <Button size="xs" className="bg-neutral-700" />
            </div>
            <div>
                <Button size="xl" disabled />
                <Button size="xl" type="primary" disabled />
                <Button size="xl" type="secondary" disabled />
                <Button size="xl" type="gradient" disabled />
            </div>
        </div>
    );
}
