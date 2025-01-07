# Notes

## DevOps

- A set of practices, philosophies and tools that increase the ability to deliver applications with high quality and at high velocity

## Version Control

> A system that records changes to a file or set of files over time so that you can access specific versions later

- A part of DevOps that tracks changes in a bid to aid software quality, release and deployments.
- It makes it easy to add, update and remove snippets of code from a codebase that has a lot of people working on it at a time without messing things up

## Types of VCS(Version Control Systems)

| Centralised VCS | Distributed VCS |
| --------------- | --------------- |
| Easier to learn | Not as easy to learn |
| One server, many clients | One server, many clients that are also servers(i.e they have the entire history of changes) |
| More access controls to clients | Lesser access control to clients |
| Slower, need to connect to server to pull or push latest changes, add changes or view file history | Faster, Only need to connect to server to pull or push latest changes |
| Clients cannot work in an offline state | Clients can work in an offline state |
| Less performant | More performant |

## Workflows

Workflows are essential to ensure code is managed correctly and reduce mistakes from happening

## Continuous Integration

Continuous Integration, or CI, is used to automate the integration of code changes from multiple developers into a single main stream. CI is often used to automatically compile the project and run tests on every code change to ensure that the build remains stable and prevent regressions in functionality.

## Continuous Delivery

Once the changes have been merged into the main stream, a Continuous Delivery system automatically packages the application and prepares it for deployment. This helps avoid human error when packaging the application.

## Continuous Deployment

The goal of Continuous Deployment is to deploy and release software to customers frequently and safely. The strategy commonly involves automatically deploying to a test (also known as staging) environment first to validate the deployment package and software changes. Once validated, it can automatically deploy to the live (also known as production) environment for customers

## Command Line

### Making Scripts Executable

```bash
chmod 755 <script_name>
```

### Piping

Used to pass the output from one command as the input to another command,

```bash
cat text1.txt text2.txt | wc -w  # returns the sum of words in both files
```

### Grep

Global Regular Expression Print

```bash
grep sam names.txt      # case sensitive
grep -i sam names.txt   # case insensitive
grep -w sam names.txt   # exact match
```

## SSH

- Secure Shell Protocol
