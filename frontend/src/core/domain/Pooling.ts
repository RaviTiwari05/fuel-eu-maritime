export interface PoolMember {
  shipId: string;
  cbBefore: number;
  cbAfter: number;
}

export interface PoolRequest {
  year: number;
  members: PoolMember[];
}
