import { css } from '@emotion/react';

// @ts-ignore
import SEO from 'src/components/seo.js';

const HomePage = () => (
  <>
    <SEO title="Override Title" />
    <div css={css`color: red;`}>
      hello, this is the home page
    </div>
  </>
)

export default HomePage;
