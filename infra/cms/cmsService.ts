type QueryString = {
  query: string
}

const CMS_API_TOKEN = "abd41bfac327d226ebf2dab1ebf1bd"

export async function cmsService({ query }: QueryString) {
  try {
    const response = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + CMS_API_TOKEN
      },
      body: JSON.stringify({ query })
    })
    const data = await response.json()
    return {
      data
    }
  } catch (error) {
    throw new Error(error)
  }
}