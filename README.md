# Deployment
1. Use the template
2. Modify _config.yml
3. Set branch to gh-pages in the Pages

The specific deployment details are in the [ref](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md).


# 使用指南

## About
Home页，TIME Group的head是在_config.yml中修改，还可以添加icon

- 主体内容: 修改`/_pages/about.md`
- 轮播图片: 修改`_data/carousel.yml`
  - 需要填写：
    - `image`：图片名称，如`1.jpg`，置于`/assets/img/carousel/`文件夹下
    - `caption`：图片描述
  - 图片按照填写顺序展示

## News

- 在`_news/`文件夹下创建新的markdown文件，如`announcement_1.md`
  - 模板如下：
    ```
    ---
    layout: post
    date: 2015-10-22 15:59:00
    inline: true
    related_posts: false
    ---
    内容
    ```

## People

- 在`_people/`文件夹下创建新的markdown文件，如`zhangsan.md`，模板如下：
  ```
  ---
  name: San Zhang
  cname: 张三 (可选)
  photo: boy.png (置于`/assets/img/people/`文件夹下，boy.png和girl.png是默认图片)
  info: Ph.D. 2021-
  research_interests:
    - Large language Models
    - Recommendation Systems
    - Graph Neural Networks
  category: phd (可选：faculty, phd, master, alumni, visiting)
  year: 2021 (入学年份，用于同一category下排序)

  (下面链接为可选项)
  homepage: https://example.com
  email: example@example.com
  google_scholar: https://scholar.google.com/citations?user=example
  github: https://github.com/example
  facebook: https://www.facebook.com/example
  x: https://x.com/example
  linkedin: https://www.linkedin.com/in/example
  ---
  ```


## Resources
resource页，可以把paper reading的pdf和公众号的文章链接放这里

- 在`_resources/`文件夹下创建新的markdown文件，如`cot-monitor.md`，模板如下：
  ```
  ---
  layout: page
  title: "Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation"
  presenter:
    - Minzhu Tu
  date: 2025-07-25
  tldr: 监控推理模型的不当行为及强化学习中隐蔽奖励作弊的风险
  slides_link: /assets/pdf/cot-monitor.pdf
  blog_link: https://mp.weixin.qq.com/s/CQ49tQ5eUjfXpwICK58-0w
  ---
  ```
- tldr中不要有: 会解析出错
- slides_link和blog_link都是可选项


## Publications
Publications页，需要手动往里面添加bib内容

- 编辑`_bibliography/papers.bib`文件
  - 添加模板如下：
    ```
    @article{PhysRev.47.777,
    # -----会议标签，需要与venues.yml里对应-----
    abbr={PhysRev},

    # -----直接复制bib文件-----
    title={Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?},
    author={Einstein*†, A. and Podolsky*, B. and Rosen*, N.},
    journal={Phys. Rev.},
    location={New Jersey},
    volume={47},
    issue={10},
    pages={777--780},
    numpages={0},
    year={1935},
    month={May},
    publisher=aps,
    doi={10.1103/PhysRev.47.777},
    url={http://link.aps.org/doi/10.1103/PhysRev.47.777}, # (bib里面自带，没有就算了)

    # -----主要添加以下内容-----
    abstract={In a complete theory there is an element corresponding to each element of reality...},  # 论文摘要
    html={https://journals.aps.org/pr/abstract/10.1103/PhysRev.47.777}, # 添加论文页面(可以用web=)
    github={https://github.com/alshedivat/al-folio/}, # 添加github链接
    pdf={example_pdf.pdf}, # 添加pdf文件，置于`/assets/pdf/`文件夹下 (也可以是url)
    annotation={* contributed equally<br>† corresponding author}, # 添加注释，位于作者旁

    google_scholar_id={qyhmnyLat1gC}, # 添加google scholar id，用于引用计数（似乎有问题）
    video={https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ}, # 添加视频链接
    additional_info={. *More Information* can be [found here](https://github.com/alshedivat/al-folio/)}, # 添加额外信息，位于期刊名称旁
    }
    ```

- venues.yml里添加修改不同会议的标签
- abstract里不要放<>，会解析出错


## Contact

- 内容：`_pages/contact.md`


## Markdown说明

- 公式：
  - 行内公式：使用`$$`包裹公式，如`$$E=mc^2$$`
  - 块级公式：使用`$$`包裹公式，并另起一行，如
    ```
    $$
    E=mc^2
    $$
    ```
- 图片：

  - 格式1：`![alt](url)`，如`![example](assets/img/example.png)`，
  - 格式2：`{% include figure.liquid path="example.png" alt="example" %}`，如`{% include figure.liquid path="example.png" alt="example" %}`
  - 图注: `<div class="caption">图注</div>`

- 脚注：
  - 在需要添加脚注的地方添加`[^index]`，如`[^1]`
  - 在markdown底部添加脚注：
    ```
    ---
    [^1]: 脚注内容
    ```


## 已删除
### Projects
- 在`_projects/`文件夹下创建新的markdown文件，如`project_1.md`
  - 模板如下：
    ```
    ---
    layout: project
    title: "example"
    author:
    - San Zhang
    - Si Li
    description: example
    img: example.png (封面图片，置于`/assets/img/project/cover/`文件夹下)
    time: 2024-01-02 15:59:00
    ---
    网页内容
    ```

### Funding
- 文案：`_pages/funding.md`
- 机构logo：`_data/funding.yml`
  - 需要填写：
    - `logo`：机构logo名称，如`example.png`，置于`/assets/img/funding/`文件夹下
    - `name`：机构名称
    - `url`：机构链接