# 🛰️ NetPulse Scanner

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![CyberSecurity](https://img.shields.io/badge/Focus-Cybersecurity-red?style=for-the-badge)

> **High-speed TCP Port Scanner** built to demonstrate the power of non-blocking I/O in network reconnaissance.

---

## 🎯 Overview

Most scanners are slow or bloated. **NetPulse** is a lightweight, asynchronous engine designed to map network entry points with precision. It explores the `net.Socket` class to identify open services on any target host.

## ⚡ Key Differentiators

* **Asynchronous Engine:** Unlike sequential scripts, it leverages the Node.js Event Loop for optimized performance.
* **Error Resilient:** Handles timeouts, refused connections, and unreachable hosts without crashing.
* **Interactive CLI:** Simple, clean, and direct user input.

## 🛠️ Built With

| Module | Purpose |
| :--- | :--- |
| `net` | Low-level TCP networking (Core Module) |
| `readline-sync` | Synchronous interactive user input |
| `Promises/Async` | Flow control and concurrency management |

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation
```bash
# Clone the repo
git clone https://github.com/LeonardoCides/AsyncScan-JS

# Enter the directory
cd AsyncScan-JS

# Install dependencies
npm install readline-sync

# Usage
node scan.js
