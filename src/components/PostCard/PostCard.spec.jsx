import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/test title/i))
      .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'test title 1' })).toBeInTheDocument();
    expect(screen.getByText('test body')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});