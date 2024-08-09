'use client'

import FilterOptions from '@/components/FilterOptions/FilterOptions'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import { MainSection } from '@/components/MainSection/MainSection'

export default function Home() {

  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters)
    // Filtrlash logikasini shu yerda amalga oshiring
  }

  return (
    <MainSection>
      <Header />
      <Hero />
      <FilterOptions onFilterChange={handleFilterChange} />
    </MainSection>
  )
}
