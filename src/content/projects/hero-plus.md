---
title: "Hero Plus Payment Platform"
description: "Multi-gateway payment platform processing transactions across Thailand, Hong Kong, Malaysia, and Singapore. Built with Ruby on Rails, React, and AWS."
tags: ["Ruby on Rails", "React", "PostgreSQL", "AWS", "Redis", "Stripe", "PCI DSS"]
featured: true
order: 1
---

## Overview

As Founding Engineer at Hero Plus Group, I architected and built a comprehensive multi-gateway payment platform serving merchants across 4 Southeast Asian regions.

## Key Achievements

- **Integrated 4 payment gateways** (Nomupay, Stripe, 2c2p, Fiuu) with multi-currency support (HKD, SGD, MYR, THB)
- **Implemented PCI DSS-compliant security** with AES-256-GCM webhook encryption, JWT/HMAC signature verification, and 3D Secure flows
- **Built automated payout & reconciliation system** with sub-account management and intelligent grouping by merchant/currency/terms
- **Delivered full-stack solution** reducing frontend load times by 42% and deployment time from 45 to 8 minutes

## Technical Architecture

- **Backend:** Ruby on Rails with service-oriented architecture (10+ service objects)
- **Frontend:** React with responsive design
- **Database:** PostgreSQL (AWS RDS) with Redis for caching
- **Infrastructure:** AWS (RDS, S3, CloudWatch, Elastic Beanstalk)
- **CI/CD:** GitLab pipelines with automated testing and deployment

## Payment Flows

- Customer-Initiated Transactions (CIT) with tokenization
- Merchant-Initiated Transactions (MIT) for recurring payments
- Bank instalment plans (Thailand-specific)
- Apple Pay and Google Pay integration
