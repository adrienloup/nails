import { describe, expect, it } from 'vitest';
import { customRender } from '@/src/test/Utils.tsx';
import { HeaderComponent } from '@/src/generic/common/components/header/Header.component.tsx';

describe('Header component', () => {
  it('Should display Header Component', () => {
    const { getByText } = customRender(<HeaderComponent />);

    // const header = render(<HeaderComponent />);

    // expect(header.getByText('Header')).toBeDefined();
    expect(getByText('Header')).toBeDefined();
  });
});
