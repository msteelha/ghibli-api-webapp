import { render } from '@testing-library/react';
import MovieVisual from '../components/MovieVisual';

const renderMovieVisuals = () => {
  const defaultProps = {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    original_title: "天空の城ラピュタ",
    original_title_romanised: "Tenkū no shiro Rapyuta",
  };

  return render(<MovieVisual {...defaultProps} />);
};

describe("<MovieVisual />", () => {
  test("should create a visual containing the original title of the movie and its romanized version", async () => {
    const { findByTestId } = renderMovieVisuals();
    const movieVisualElement = await findByTestId("movie_visual");

    expect(movieVisualElement).toHaveTextContent("天空の城ラピュタ");
    expect(movieVisualElement).toHaveTextContent("Tenkū no shiro Rapyuta");
  })
});