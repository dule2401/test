import React, { useCallback } from 'react';
//
import type { WithUid } from '@/shared/types';

export function useDataList<T>(initData: WithUid<T>[] = []) {
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState<WithUid<T>[]>(initData);
  const [editItem, setEditItem] = React.useState<WithUid<T>>();

  const openModal = (e?: WithUid<T>) => {
    if (e) setEditItem(e);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setEditItem(undefined);
  };

  const addItem = (item: WithUid<T>) => {
    setData((prev) => [...prev, { ...item, uid: item.uid }]);
  };

  const updateItem = (newItem: WithUid<T>) => {
    setData((prev) => prev.map((e) => (newItem.uid === e.uid ? newItem : e)));
    setEditItem(undefined);
  };

  const removeItem = (uid: string) => {
    setData((prev) => prev.filter((item) => uid !== item.uid));
  };

  const bulkRemove = (uids: string[]) => {
    if (!uids.length) return;
    setData((prev) => prev.filter((item) => !uids.includes(item.uid)));
  };

  const clear = useCallback(() => {
    setData([]);
  }, [setData]);

  const isEmpty = useCallback(() => !data.length, [data]);

  return {
    visible,
    setVisible,
    data,
    setData,
    editItem,
    setEditItem,
    addItem,
    removeItem,
    updateItem,
    openModal,
    closeModal,
    clear,
    isEmpty,
    bulkRemove,
  };
}
