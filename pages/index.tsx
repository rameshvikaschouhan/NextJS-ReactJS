import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import HeaderLeftMenu from '../components/headerLeftMenu'
import HeaderRightMenu from '../components/headerRightMenu'
import Banner from '../components/banner'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import styled from 'styled-components'


export let theme = createTheme({
  typography: {
    fontFamily: "Beausite Classic, sans-serif",
  }
});

const Menu = styled.div`
  display: flex;
`;

const StyledBanner = styled(Banner)`
`;

const Index: NextPageWithLayout = () => {
  return (
    <section>
      <Menu>
        <HeaderLeftMenu />
        <HeaderRightMenu />
      </Menu>
      <StyledBanner />
      
    </section>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      {page}
    </Layout>
    </ThemeProvider>
    
  )
}
