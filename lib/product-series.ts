// utils/product-series.ts
export function getAvailableSeries(products: any[]): string[] {
  const series = products.map(product => {
    const match = product.name.match(/^MI-([A-Z])/)
    return match ? match[1] : null
  })
  return Array.from(new Set(series.filter(Boolean))) as string[]
}

export function filterProductsBySeries(products: any[], sortBy: string): any[] {
  if (sortBy.startsWith('series-')) {
    const seriesLetter = sortBy.replace('series-', '')
    return products.filter(product => 
      product.name.startsWith(`MI-${seriesLetter}`)
    )
  }
  return products
}
