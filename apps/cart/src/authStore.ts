import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export const jwt = new BehaviorSubject<string | null>(null);
