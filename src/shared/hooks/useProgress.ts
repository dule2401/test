import { useEffect, useState } from 'react';

enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Done = 'done',
  Error = 'error',
}

export const useProgress = () => {
  const [loadedPercent, setLoadedPercent] = useState(0);
  const [progressStt, setProgressStt] = useState(Status.Idle);

  const startDownload = () => setProgressStt(Status.Loading);
  const markDownloadError = () => setProgressStt(Status.Error);
  const resetProgressStt = () => setProgressStt(Status.Idle);
  const doneDownload = () => setProgressStt(Status.Done);

  useEffect(() => {
    if (progressStt !== Status.Loading) {
      setLoadedPercent(0);
    }
  }, [progressStt]);

  return {
    startDownload,
    markDownloadError,
    resetProgressStt,
    doneDownload,
    setLoadedPercent,
    isLoading: progressStt === Status.Loading,
    loadedPercent,
  };
};
