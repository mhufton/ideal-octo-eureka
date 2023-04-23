import React from "react"
import { useSummary } from "../../contexts/useSummary"
import { ISummaryDto } from "../../dtos/ISummaryDto"
import { SummaryMap } from "./Summaries.styles"

const Summaries = () => {
  const { summaries, fetchSummaries } = useSummary()

  React.useEffect(() => {
    fetchSummaries();
  }, [])
  console.log(summaries)
  
  return (
    <>
      <SummaryMap>
        {summaries && summaries.map((summary: ISummaryDto) => {
          return (
            <>
              <div key={summary.id}>{summary.summary}</div>
              <hr />
            </>
          )
        })}
      </SummaryMap>
      {!summaries && <p>no summaries</p>}
    </>
  )
}

export default Summaries
