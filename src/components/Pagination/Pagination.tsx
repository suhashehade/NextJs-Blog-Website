"use client";
import React, { useState } from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
interface Props {
  page: number;
  count: number;
}
const Pagination: React.FC<Props> = ({ page, count }) => {
  const postPerPage = 2;
  const router = useRouter();
  const hasPrev = postPerPage * (page - 1) > 0;
  const hasNext = postPerPage * (page - 1) + postPerPage < count;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
