// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block(): i32 {
    let value = this.get("block");
    return value.toI32();
  }

  set block(value: i32) {
    this.set("block", Value.fromI32(value));
  }

  get event(): string {
    let value = this.get("event");
    return value.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get stream(): string {
    let value = this.get("stream");
    return value.toString();
  }

  set stream(value: string) {
    this.set("stream", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class CToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CToken", id.toString(), this);
  }

  static load(id: string): CToken | null {
    return store.get("CToken", id) as CToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get whitelisted(): boolean {
    let value = this.get("whitelisted");
    return value.toBoolean();
  }

  set whitelisted(value: boolean) {
    this.set("whitelisted", Value.fromBoolean(value));
  }
}

export class Cancellation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Cancellation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Cancellation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Cancellation", id.toString(), this);
  }

  static load(id: string): Cancellation | null {
    return store.get("Cancellation", id) as Cancellation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get recipientBalance(): BigInt {
    let value = this.get("recipientBalance");
    return value.toBigInt();
  }

  set recipientBalance(value: BigInt) {
    this.set("recipientBalance", Value.fromBigInt(value));
  }

  get recipientInterest(): BigInt | null {
    let value = this.get("recipientInterest");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set recipientInterest(value: BigInt | null) {
    if (value === null) {
      this.unset("recipientInterest");
    } else {
      this.set("recipientInterest", Value.fromBigInt(value as BigInt));
    }
  }

  get sablierInterest(): BigInt | null {
    let value = this.get("sablierInterest");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sablierInterest(value: BigInt | null) {
    if (value === null) {
      this.unset("sablierInterest");
    } else {
      this.set("sablierInterest", Value.fromBigInt(value as BigInt));
    }
  }

  get senderBalance(): BigInt {
    let value = this.get("senderBalance");
    return value.toBigInt();
  }

  set senderBalance(value: BigInt) {
    this.set("senderBalance", Value.fromBigInt(value));
  }

  get senderInterest(): BigInt | null {
    let value = this.get("senderInterest");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set senderInterest(value: BigInt | null) {
    if (value === null) {
      this.unset("senderInterest");
    } else {
      this.set("senderInterest", Value.fromBigInt(value as BigInt));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Stream extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stream entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stream entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stream", id.toString(), this);
  }

  static load(id: string): Stream | null {
    return store.get("Stream", id) as Stream | null;
  }

  get cancellation(): string | null {
    let value = this.get("cancellation");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cancellation(value: string | null) {
    if (value === null) {
      this.unset("cancellation");
    } else {
      this.set("cancellation", Value.fromString(value as string));
    }
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get exchangeRateInitial(): BigInt | null {
    let value = this.get("exchangeRateInitial");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set exchangeRateInitial(value: BigInt | null) {
    if (value === null) {
      this.unset("exchangeRateInitial");
    } else {
      this.set("exchangeRateInitial", Value.fromBigInt(value as BigInt));
    }
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ratePerSecond(): BigInt {
    let value = this.get("ratePerSecond");
    return value.toBigInt();
  }

  set ratePerSecond(value: BigInt) {
    this.set("ratePerSecond", Value.fromBigInt(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get recipientSharePercentage(): BigInt | null {
    let value = this.get("recipientSharePercentage");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set recipientSharePercentage(value: BigInt | null) {
    if (value === null) {
      this.unset("recipientSharePercentage");
    } else {
      this.set("recipientSharePercentage", Value.fromBigInt(value as BigInt));
    }
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get senderSharePercentage(): BigInt | null {
    let value = this.get("senderSharePercentage");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set senderSharePercentage(value: BigInt | null) {
    if (value === null) {
      this.unset("senderSharePercentage");
    } else {
      this.set("senderSharePercentage", Value.fromBigInt(value as BigInt));
    }
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get stopTime(): BigInt {
    let value = this.get("stopTime");
    return value.toBigInt();
  }

  set stopTime(value: BigInt) {
    this.set("stopTime", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get txs(): Array<string> {
    let value = this.get("txs");
    return value.toStringArray();
  }

  set txs(value: Array<string>) {
    this.set("txs", Value.fromStringArray(value));
  }

  get withdrawals(): Array<string> {
    let value = this.get("withdrawals");
    return value.toStringArray();
  }

  set withdrawals(value: Array<string>) {
    this.set("withdrawals", Value.fromStringArray(value));
  }
}

export class Withdrawal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdrawal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdrawal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdrawal", id.toString(), this);
  }

  static load(id: string): Withdrawal | null {
    return store.get("Withdrawal", id) as Withdrawal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get recipientInterest(): BigInt | null {
    let value = this.get("recipientInterest");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set recipientInterest(value: BigInt | null) {
    if (value === null) {
      this.unset("recipientInterest");
    } else {
      this.set("recipientInterest", Value.fromBigInt(value as BigInt));
    }
  }

  get sablierInterest(): BigInt | null {
    let value = this.get("sablierInterest");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sablierInterest(value: BigInt | null) {
    if (value === null) {
      this.unset("sablierInterest");
    } else {
      this.set("sablierInterest", Value.fromBigInt(value as BigInt));
    }
  }

  get senderInterest(): BigInt | null {
    let value = this.get("senderInterest");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set senderInterest(value: BigInt | null) {
    if (value === null) {
      this.unset("senderInterest");
    } else {
      this.set("senderInterest", Value.fromBigInt(value as BigInt));
    }
  }

  get stream(): string {
    let value = this.get("stream");
    return value.toString();
  }

  set stream(value: string) {
    this.set("stream", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Salary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Salary entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Salary entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Salary", id.toString(), this);
  }

  static load(id: string): Salary | null {
    return store.get("Salary", id) as Salary | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get company(): Bytes {
    let value = this.get("company");
    return value.toBytes();
  }

  set company(value: Bytes) {
    this.set("company", Value.fromBytes(value));
  }

  get stream(): string {
    let value = this.get("stream");
    return value.toString();
  }

  set stream(value: string) {
    this.set("stream", Value.fromString(value));
  }
}
