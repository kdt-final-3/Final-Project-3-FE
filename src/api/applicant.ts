import type { AxiosResponse } from "axios";
import type { IApplicantApplyReq } from "@/types/application";
import { client } from "./axios";

// 지원자 이메일 중복확인
export const emailDuplicatecheck = async (
  applyEmail: string,
  recruitId: number,
) => {
  const { data }: AxiosResponse = await client.get(
    `/view/check?email=${applyEmail}&recruitId=${recruitId}`,
  );
  return data;
};

// 지원서 등록
export const submitApply = async (value: IApplicantApplyReq) => {
  const { data }: AxiosResponse = await client.post(`/view/submit`, value);

  return data;
};

// 지원서 채용폼 조회
export const getRecuitData = async (recruitId: number) => {
  const { data }: AxiosResponse = await client.get(`/view/${recruitId}`);

  return data;
};
