var categoryJson = {
  categories: [{
    title: "组件和层",
    contents: [{
      icon: "images/layer64.png",
      tooltip: "层（Layer）是组件的容器，是将组件作了逻辑上的划分，例如web层、数据层等。此外，对层的直接操作可以让您的组件管理变得更加方便和快捷。除了负载均衡SLB以外，所有的组件必须被放置在层内才有效。",
      label: "层",
      type: "layer",
      width: 300,
      height: 150
    }, {
      icon: "images/ecs64.png",
      tooltip: "云服务器（Elastic Compute Service, 简称ECS）是一种处理能力可弹性伸缩的计算服务，其管理方式比物理服务器更简单高效。云服务器帮助您快速构建更稳定、安全的应用，降低开发运维的难度和整体IT成本，使您能够更专注于核心业务创新。",
      label: "ECS",
      type: "ecs"
    }, {
      icon: "images/rds64.png",
      tooltip: "关系型数据库服务（Relational Database Service，简称RDS）是一种稳定可靠、可弹性伸缩的在线数据库服务。RDS采用即开即用方式，兼容MySQL、SQL Server两种关系型数据库，并提供数据库在线扩容、备份回滚、性能监测及分析功能。RDS与云服务器搭配使用I/O性能倍增，内网互通避免网络瓶颈。",
      label: "RDS",
      type: "rds"
    }, {
      icon: "images/oss64.png",
      tooltip: "此图标表示OSS Bucket。Bucket 是 OSS 上的命名空间,每个 Bucket 中可以存储任意数量的 Object,但 Bucket 本身并不直接包含任何数据。Bucket 相当于单机系统中的一块硬盘,而 Object 相当于硬盘 中存放的文件。在此一个组件图标即代表一个Bucket命名空间",
      label: "OSS",
      type: "oss"
    }]
  }, {
    title: "系统镜像",
    contents: [{
      icon: "images/cent32os_s.png",
      tooltip: "CentOS 6.5 32位",
      label: "CentOS 6.5",
      type: 'os',
      os: "centos",
      version: "6.5",
      bit: 32
    }, {
      icon: "images/cent64os_s.png",
      tooltip: "CentOS 5.10 64位",
      label: "CentOS 5.10",
      type: 'os',
      os: "centos",
      version: "5.10",
      bit: 64
    }, {
      icon: "images/debian32os_s.png",
      tooltip: "Debian 7.5.0 32位",
      label: "Debian 7.5.0",
      type: 'os',
      os: "debian",
      version: "7.5.0",
      bit: 32
    }, {
      icon: "images/debian64os_s.png",
      tooltip: "Debian 7.5.0 64位",
      label: "Debian 7.5.0",
      type: 'os',
      os: "debian",
      version: "7.5.0",
      bit: 64
    }]
  }]
};