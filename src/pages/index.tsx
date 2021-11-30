import { Layout } from "systems/Core";
import {Input, Box} from '@chakra-ui/react'

export default function Home() {
  return (
  <Layout title="Events App">
    <Box width={300} p={10}>
      <Input placeholder='Basic Usage'/>
    </Box>
  </Layout>)
}
