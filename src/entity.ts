import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PersonalDetails {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name!: string;

  @Column({ nullable: true })
  surname!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  nationality!: string;

  @Column({ type: "date", nullable: true })
  dob!: Date;

  @Column({ nullable: true })
  homeAddressLine1!: string;

  @Column({ nullable: true })
  homeAddressLine2!: string;

  @Column({ nullable: true })
  postalCode!: string;

  @Column({ nullable: true })
  phone!: string;

  @Column({ nullable: true })
  NRIC!: string;
}

@Entity()
export class BusinessDetails {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  industry!: string;

  @Column({ nullable: true })
  business_website!: string;

  @Column({ nullable: true })
  product_description!: string;
}

@Entity()
export class PublicDetails {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  statement_descriptor!: string;

  @Column({ nullable: true })
  business_website!: string;

  @Column({ nullable: true })
  phone!: string;
}

@Entity()
export class BankDetails {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  bankName!: string;

  @Column({ nullable: true })
  branchName!: string;

  @Column({ nullable: true })
  accountNumber!: string;

  @Column({ nullable: true })
  swiftCode!: string;
}
