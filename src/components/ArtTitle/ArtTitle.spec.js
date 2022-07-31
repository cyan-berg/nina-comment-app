import { render } from '@testing-library/vue'
import ArtTitle from './ArtTitle.vue'

describe('ArtTitle.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new title'

    const { getByText } = render(ArtTitle, { propsData: { title } })
    getByText(title)
  })
})
