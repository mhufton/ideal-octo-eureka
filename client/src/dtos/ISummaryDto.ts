export interface ISummaryDto {
  id: string;
  summary: string;
  tags: string[];
  dateCreated: Date;
  ownerId: string;
}