import React, { createContext, useState, useContext } from 'react';
import { ISummaryDto } from '../dtos/ISummaryDto';

interface SummaryContextType {
  /** the list of summaries - may be an empty array */
  summary: ISummaryDto | null,
  /** sets the summary with the response from the backend */
  setSummary: React.Dispatch<React.SetStateAction<ISummaryDto | null>>,
  /** gets the summary from the backend */
  getSummary: () => Promise<void>,
  /** the boolean value of whether or not something has been or is in the process of being summarised. This is so we can render in one place either the textToBeSummarised or the SummarisedText */
  toggleSummary: boolean,
  /** fetches all summaries from the backend */
  fetchSummaries: () => Promise<void | ISummaryDto[] | null>,
  /** the list of summaries from the backend */
  summaries: ISummaryDto[] | null,
  /** creates a summary in the backend */
  createSummary: (text: string) => Promise<void>
}

/** create SummaryContext with default values */
const SummaryContext = createContext<SummaryContextType>({
  summary: null,
  setSummary: () => {},
  getSummary: async () => {},
  toggleSummary: false,
  fetchSummaries: async () => {},
  summaries: null,
  createSummary: async () => {}
});


export const useSummary = () => useContext(SummaryContext);

interface SummaryProviderProps {
  children: JSX.Element;
  initialSummary?: null;
}

/** holds the states of summaries - getting them, setting, searching by tags */
export const SummaryProvider = ({
  children,
  initialSummary = null,
}: SummaryProviderProps) => {
  const [summary, setSummary] = useState<ISummaryDto | null>(initialSummary);
  const [toggleSummary, setToggleSummary] = useState<boolean>(false);
  const [summaries, setSummaries] = useState<ISummaryDto[] | null>(null);

  const getSummary = async () => {
    setToggleSummary(true);
    setTimeout(() => setToggleSummary(false), 2500);
    try {
      // TODO: call the backend to get the summary
    } catch (error) {
      console.log(error);
    }
  }

  const fetchSummaries = async () => {
    try {
      await fetch('http://localhost:3000/summary')
        .then((res) => res.json())
        .then((data) => setSummaries(data))
        .catch((err) => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }

  const createSummary = async (text: string) => {
    const requestBody = {
      text: text
    };
  
    try {
      const response = await fetch('http://localhost:3000/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      setSummary(data)
    } catch (error) {
      console.error(error);
    }
  };

  const value: SummaryContextType = {
    summary,
    setSummary,
    getSummary,
    toggleSummary,
    fetchSummaries,
    summaries,
    createSummary
  }

  return (
    <SummaryContext.Provider value={value}>
      {children}
    </SummaryContext.Provider>
  );
};
