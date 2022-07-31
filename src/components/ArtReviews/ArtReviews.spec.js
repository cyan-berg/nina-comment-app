import { render, fireEvent } from '@testing-library/vue'
import ArtReviews from './ArtReviews.vue'

describe('ArtReviews.vue', () => {
  it('Review shows up in list after typing and clicking', async () => {
    const heading = 'Reviews'
    const philosophicalComment =
      'Wow, stink therefore I am, seems comical, but may have deeper implications.'

    const { getByText, getByTestId, debug, findByText } = render(ArtReviews)
    getByText(heading)
    const button = getByText('Submit')
    const reviewInput = getByTestId('review-input')
    await fireEvent.input(reviewInput, philosophicalComment)
    await fireEvent.click(button)
    findByText(philosophicalComment)
    debug()
  })
})
